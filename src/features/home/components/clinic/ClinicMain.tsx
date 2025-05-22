import React from 'react'
import {FlatList, View} from 'react-native'

import {IClinicMain} from 'types/features'

import {stylesClinicMain} from 'features/home/style/clinic'

import {CardPackageClinic} from '.'

const ClinicMain: React.FC<IClinicMain> = ({...props}): JSX.Element => {
  // Geolocation.getCurrentPosition(
  //   position => {
  //     const pis = calculatePreciseDistance(
  //       {
  //         lat: position.coords.latitude,
  //         long: position.coords.longitude
  //       },
  //       {
  //         lat: location.lat,
  //         long: location.long
  //       }
  //     )
  //     if (pis >= 1) {
  //       // setLocation({
  //       //   lat: position.coords.latitude,
  //       //   long: position.coords.longitude
  //       // })
  //     }
  //   },
  //   error => error.message,
  //   {
  //     enableHighAccuracy: false,
  //     timeout: 20000,
  //     maximumAge: 1000
  //   }
  // )

  // const {contextClinicByLocationService, contextClinicService} = ApiClinic({
  //   lat: `${location.lat}`,
  //   long: `${location.long}`
  // })
  // const {data} = contextClinicByLocationService
  // const {data: dataService} = contextClinicService

  // React.useEffect(() => {
  //   if (props.isRefresh) {
  //     contextClinicByLocationService.refetch()
  //     contextClinicService.refetch()
  //   }
  // }, [props.isRefresh])

  return true ? (
    <View>
      {/* <HeaderClinic name={data?.data.clinic.clinic_name || ''} /> */}
      {/* <BannerClinic
        translationY={props.translationY}
        img={data?.data.clinic.cover_image}
      /> */}
      <View style={stylesClinicMain.container}>
        <View style={stylesClinicMain.topContainer}>
          {/* top */}
          <View style={stylesClinicMain.containerTopContentClinic}>
            {/* <TopContentClinic
              description={data?.data.clinic.clinic_name || ''}
              address={data?.data.clinic.address}
              distance={data?.data.clinic.km || ''}
              status={data?.data.opent_time.open.isOpen || false}
              time={data?.data.opent_time.week as Week}
            /> */}
          </View>
          {/* top */}
          {/* service */}

          {/* {!isEmpty(dataService?.data) && (
            <View style={stylesClinicMain.containerServiceClinic}>
              <ServiceClinic
                data={dataService?.data as DataTypeClinicService[]}
                status={dataService?.status || ''}
              />
            </View>
          )} */}

          {/* service */}
          {/* map */}
          <View style={stylesClinicMain.containerMapClinic}>
            {/* <MapClinic
              address={data?.data.clinic.address}
              lat={Number(data?.data.clinic.lat)}
              long={Number(data?.data.clinic.long)}
              phone={data?.data.clinic.phone || ''}
            /> */}
          </View>
          {/* map */}
          {/* list card */}
          <View style={stylesClinicMain.containerCardPackageClinic}>
            <FlatList
              data={
                props.data
                // MockListPackage
              }
              scrollEnabled={false}
              numColumns={2}
              keyExtractor={item => item.id.value}
              columnWrapperStyle={{
                justifyContent: 'space-between'
                // marginBottom: 15,
              }}
              renderItem={({item}) => (
                <View style={[stylesClinicMain.containerCardPackageClinicList]}>
                  <CardPackageClinic
                    // Image={item.Image}
                    // title={item.title}
                    // Descriptions={item.Descriptions}
                    // isReadMore={item.isReadMore}
                    Image={item.picture.thumbnail}
                    title={`${item.name.first}  ${item.name.title}`}
                    Descriptions={item.phone}
                    isReadMore={true}
                  />
                </View>
              )}
            />
          </View>
          {/* list card */}
        </View>
      </View>
    </View>
  ) : (
    <></>
  )
  // contextClinicByLocationService.isLoading &&
  //   contextClinicService.isLoading ? (
  //   <>
  //     <LottieAnimatedView
  //       exiting={keyframes.fadeOutSize}
  //       lottiePath={lottie.skeletonHeaderClinic}
  //       lottieStyle={skeletionLoadingStyle}
  //       lottieContainer={skeletionLoadingContainerStyle({
  //         width: horizontalScale(290),
  //         marginHorizontal: horizontalScale(24)
  //       })}
  //     />
  //     <LottieAnimatedView
  //       exiting={keyframes.fadeOutSize}
  //       lottiePath={lottie.skeletonClinicMain}
  //       lottieStyle={skeletionLoadingStyle}
  //       lottieContainer={skeletionLoadingContainerStyle({
  //         width: horizontalScale(377)
  //       })}
  //     />
  //   </>
  // ) :
}

export default ClinicMain
