import {FlatListProps, ViewabilityConfig} from 'react-native'

import {PaginationProps} from './paginatiom-type'

type ScrollToIndex = {index: number; animated?: boolean}
export type SwiperFlatListRefProps = {
  getCurrentIndex: () => number
  getPrevIndex: () => number
  scrollToIndex: (item: ScrollToIndex) => void
  goToLastIndex: () => void
  goToFirstIndex: () => void
}

export type SwiperFlatListProps<T> = Partial<FlatListProps<T>> & {
  children?: React.ReactNode | React.ReactNode[]
  data?: T[]
  vertical?: boolean
  index?: number
  renderAll?: boolean
  renderItem?: FlatListProps<T>['renderItem']
  onChangeIndex?: (item: {index: number; prevIndex: number}) => void
  disableGesture?: boolean
  autoplayDelay?: number
  autoplay?: boolean
  autoplayInvertDirection?: boolean
  autoplayLoop?: boolean
  autoplayLoopKeepAnimation?: boolean
  onMomentumScrollEnd?: (item: {index: number}, event: any) => void
  onViewableItemsChanged?: FlatListProps<T>['onViewableItemsChanged']
  viewabilityConfig?: ViewabilityConfig
  showPagination?: boolean
  PaginationComponent?: React.FC<PaginationProps>
} & Pick<
    PaginationProps,
    | 'paginationActiveColor'
    | 'paginationDefaultColor'
    | 'paginationStyle'
    | 'paginationStyleItem'
    | 'paginationStyleItemActive'
    | 'paginationStyleItemInactive'
    | 'onPaginationSelectedIndex'
    | 'paginationTapDisabled'
    | 'isLastItemHidden'
  >
