import request from '@/utils/request';

export interface IPAPI {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_code: string;
  country_name: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  languages: string;
  asn: string;
  org: string;
}

export const getIP = () =>
  request.get<IPAPI>(
    'https://ipapi.co/json/?key=9b5ead61b450c221612420e938ffccd5ca9a5f1a'
  );
