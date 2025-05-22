import React from 'react'
import {FlatList, FlatListProps} from 'react-native'

import {
  SwiperFlatListProps,
  SwiperFlatListRefProps
} from 'types/components/carousel-type'

import {Pagination} from './Pagination'

const MILLISECONDS = 1000
const FIRST_INDEX = 0
const ITEM_VISIBLE_PERCENT_THRESHOLD = 60

type T1 = any
type ScrollToIndex = {index: number; animated?: boolean}
type ScrollToIndexInternal = {useOnChangeIndex: boolean}

export const SwpierCarousel = React.forwardRef(
  (
    {
      vertical = false,
      children,
      data = [],
      renderItem,
      renderAll = false,
      index = FIRST_INDEX,
      showPagination = false,
      PaginationComponent = Pagination,
      paginationActiveColor,
      paginationDefaultColor,
      paginationStyle,
      paginationStyleItem,
      paginationStyleItemActive,
      paginationStyleItemInactive,
      onPaginationSelectedIndex,
      paginationTapDisabled = false,
      autoplayDelay = 3,
      autoplay = false,
      autoplayLoop = false,
      autoplayLoopKeepAnimation = false,
      autoplayInvertDirection = false,
      onChangeIndex,
      onMomentumScrollEnd,
      onViewableItemsChanged,
      viewabilityConfig = {},
      disableGesture = false,
      isLastItemHidden = false,
      ...props
    }: SwiperFlatListProps<T1>,
    ref: React.Ref<SwiperFlatListRefProps>
  ) => {
    let Fdata: any[] = []
    let FrenderItem: FlatListProps<any>['renderItem']

    if (children) {
      Fdata = Array.isArray(children) ? children : [children]
      FrenderItem = ({item}) => item
    } else if (data) {
      Fdata = data
      FrenderItem = renderItem
    } else {
      throw 'Invalid props, `data` or `children` is required'
    }
    const size = Fdata.length
    const FinitialNumToRender = renderAll ? size : 1
    const [currentIndexes, setCurrentIndexes] = React.useState({
      index,
      prevIndex: index
    })
    const [ignoreOnMomentumScrollEnd, setIgnoreOnMomentumScrollEnd] =
      React.useState(false)
    const flatListElement = React.useRef<FlatList<any>>(null)
    const [scrollEnabled, setScrollEnabled] = React.useState(!disableGesture)

    React.useEffect(() => {
      setScrollEnabled(!disableGesture)
    }, [disableGesture])

    const FonChangeIndex = React.useCallback(
      ({
        index: Findex,
        prevIndex: FprevIndex
      }: {
        index: number
        prevIndex: number
      }) => {
        if (Findex !== FprevIndex) {
          onChangeIndex?.({index: Findex, prevIndex: FprevIndex})
        }
      },
      [onChangeIndex]
    )

    const FscrollToIndex = (
      params: ScrollToIndex,
      extra: ScrollToIndexInternal
    ) => {
      const {index: indexToScroll, animated = true} = params
      const newParams = {animated, index: indexToScroll}

      setIgnoreOnMomentumScrollEnd(true)

      const next = {
        index: indexToScroll,
        prevIndex: currentIndexes.index
      }
      if (
        currentIndexes.index !== next.index &&
        currentIndexes.prevIndex !== next.prevIndex
      ) {
        setCurrentIndexes({index: next.index, prevIndex: next.prevIndex})
      } else if (currentIndexes.index !== next.index) {
        setCurrentIndexes(prevState => ({...prevState, index: next.index}))
      } else if (currentIndexes.prevIndex !== next.prevIndex) {
        setCurrentIndexes(prevState => ({
          ...prevState,
          prevIndex: next.prevIndex
        }))
      }

      if (extra.useOnChangeIndex) {
        FonChangeIndex({index: next.index, prevIndex: next.prevIndex})
      }
      flatListElement?.current?.scrollToIndex(newParams)
    }

    React.useEffect(() => {
      FonChangeIndex({
        index: currentIndexes.index,
        prevIndex: currentIndexes.prevIndex
      })
    }, [currentIndexes.index])

    React.useImperativeHandle(ref, () => ({
      scrollToIndex: (item: ScrollToIndex) => {
        setScrollEnabled(true)
        FscrollToIndex(item, {useOnChangeIndex: true})
        setScrollEnabled(!disableGesture)
      },
      getCurrentIndex: () => currentIndexes.index,
      getPrevIndex: () => currentIndexes.prevIndex,
      goToLastIndex: () => {
        setScrollEnabled(true)
        FscrollToIndex({index: size - 1}, {useOnChangeIndex: false})
        setScrollEnabled(!disableGesture)
      },
      goToFirstIndex: () => {
        setScrollEnabled(true)
        FscrollToIndex({index: FIRST_INDEX}, {useOnChangeIndex: false})
        setScrollEnabled(!disableGesture)
      }
    }))

    React.useEffect(() => {
      const isLastIndexEnd = autoplayInvertDirection
        ? currentIndexes.index === FIRST_INDEX
        : currentIndexes.index === Fdata.length - 1
      const shouldContinuoWithAutoplay = autoplay && !isLastIndexEnd
      let autoplayTimer: ReturnType<typeof setTimeout>
      if (shouldContinuoWithAutoplay || autoplayLoop) {
        autoplayTimer = setTimeout(() => {
          if (Fdata.length < 1) {
            return
          }
          if (!autoplay) {
            return
          }

          const nextIncrement = autoplayInvertDirection ? -1 : +1

          let nextIndex = (currentIndexes.index + nextIncrement) % Fdata.length
          if (autoplayInvertDirection && nextIndex < FIRST_INDEX) {
            nextIndex = Fdata.length - 1
          }
          const animate = !isLastIndexEnd || autoplayLoopKeepAnimation

          FscrollToIndex(
            {index: nextIndex, animated: animate},
            {useOnChangeIndex: true}
          )
        }, autoplayDelay * MILLISECONDS)
      }
      return () => clearTimeout(autoplayTimer)
    }, [autoplay, currentIndexes.index, Fdata.length])

    const FonMomentumScrollEnd: FlatListProps<any>['onMomentumScrollEnd'] =
      event => {
        if (ignoreOnMomentumScrollEnd) {
          setIgnoreOnMomentumScrollEnd(false)
          return
        }
        onMomentumScrollEnd?.({index: currentIndexes.index}, event)
      }

    const FonViewableItemsChanged = React.useMemo<
      FlatListProps<any>['onViewableItemsChanged']
    >(
      () => params => {
        const {changed} = params
        const newItem = changed?.[FIRST_INDEX]
        if (newItem !== undefined) {
          const nextIndex = newItem.index as number
          if (newItem.isViewable) {
            setCurrentIndexes(prevState => ({...prevState, index: nextIndex}))
          } else {
            setCurrentIndexes(prevState => ({
              ...prevState,
              prevIndex: nextIndex
            }))
          }
        }
        onViewableItemsChanged?.(params)
      },
      []
    )

    const keyExtractor: FlatListProps<any>['keyExtractor'] = (_item, Findex) =>
      Findex.toString()
    const onScrollToIndexFailed: FlatListProps<any>['onScrollToIndexFailed'] =
      info =>
        setTimeout(() =>
          FscrollToIndex(
            {index: info.index, animated: false},
            {useOnChangeIndex: true}
          )
        )

    const flatListProps = {
      scrollEnabled,
      ref: flatListElement,
      keyExtractor,
      horizontal: !vertical,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
      pagingEnabled: true,
      ...props,
      onMomentumScrollEnd: FonMomentumScrollEnd,
      onScrollToIndexFailed: onScrollToIndexFailed,
      data: Fdata,
      renderItem: FrenderItem,
      initialNumToRender: FinitialNumToRender,
      initialScrollIndex: index,
      viewabilityConfig: {
        minimumViewTime: 200,
        itemVisiblePercentThreshold: ITEM_VISIBLE_PERCENT_THRESHOLD,
        ...viewabilityConfig
      },
      onViewableItemsChanged: FonViewableItemsChanged
    }

    const scrollToIndexForPagination = (params: ScrollToIndex) => {
      FscrollToIndex(params, {useOnChangeIndex: false})
    }

    const paginationProps = {
      size,
      paginationIndex: currentIndexes.index,
      scrollToIndex: scrollToIndexForPagination,
      paginationActiveColor,
      paginationDefaultColor,
      paginationStyle,
      paginationStyleItem,
      paginationStyleItemActive,
      paginationStyleItemInactive,
      onPaginationSelectedIndex,
      paginationTapDisabled,
      isLastItemHidden
    }

    return (
      <>
        <FlatList {...flatListProps} />
        {showPagination && <PaginationComponent {...paginationProps} />}
      </>
    )
  }
)

type Handle<T> = T extends React.ForwardRefExoticComponent<
  React.RefAttributes<infer T2>
>
  ? T2
  : never

SwpierCarousel.displayName = 'SwpierCarousel'
export type ISwpierCarousel = Handle<typeof SwpierCarousel>
