export type HotelBasicInfo = {
  access: string;
  address1: string;
  address2: string;
  dpPlanListUrl: string;
  faxNo: string;
  hotelImageUrl: string;
  hotelInformationUrl: string;
  hotelKanaName: string | null;
  hotelMapImageUrl: string;
  hotelMinCharge: number;
  hotelName: string;
  hotelNo: number;
  hotelSpecial: string;
  hotelThumbnailUrl: string;
  latitude: number;
  longitude: number;
  nearestStation: string;
  parkingInformation: string;
  planListUrl: string;
  postalCode: string;
  reviewAverage: number | null;
  reviewCount: number;
  reviewUrl: string;
  roomImageUrl: string | null;
  roomThumbnailUrl: string | null;
  telephoneNo: string;
  userReview: string | null;
}

export type HotelRatingInfo = {
  bathAverage: number;
  equipmentAverage: number;
  locationAverage: number;
  mealAverage: number;
  roomAverage: number;
  serviceAverage: number;
}

export type Hotel = [{hotelBasicInfo: HotelBasicInfo}, {hotelRatingInfo: HotelRatingInfo}]
export type Hotels = Array<Hotel>