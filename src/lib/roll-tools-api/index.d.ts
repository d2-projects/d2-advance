import { AxiosPromise, AxiosInstance } from 'node_modules/axios/index'

export default client as AxiosInstance

interface BaseResponseData {
  code: number;
  msg: string;
}

interface BasePaginationData<T> {
  page: number,
  totalCount: number,
  totalPage: number,
  limit: number,
  list: T[];
}

interface GirlImage {
  imageUrl: string,
  imageSize: string,
  imageFileLength: number
}

export function getGirlImages(page: number): AxiosPromise<
  BaseResponseData & {
    data: BasePaginationData<GirlImage>
  }
>

export function getRandomGirlImages(): AxiosPromise<
  BaseResponseData & {
    data: GirlImage[]
  }
>

interface IpInfo {
  ip: string,
  province: string,
  provinceId: number,
  city: string,
  cityId: number,
  isp: string,
  desc: string;
}

export function getSelfIpInfo(): AxiosPromise<
  BaseResponseData & {
    data: IpInfo
  }
>

export function getTargetIpInfo(ip: string): AxiosPromise<
  BaseResponseData & {
    data: IpInfo
  }
>

interface ChinaCityTreeNode {
  code: string;
  name: string;
  type: 'province' | 'city' | 'region';
  value: string,
  label: string,
  children?: ChinaCityTreeNode[]
}

export function getChinaCityTree(ip: string): AxiosPromise<
  BaseResponseData & {
    data: ChinaCityTreeNode[]
  }
>

interface QrcodeParams {
  content: string;
  size: 500 | number | null | undefined;
  type: 1 | 0 | null | undefined;
  logo: File | null | undefined;
  logoSize: 100 | number | null | undefined;
}

interface QrcodeResult {
  qrCodeUrl: string | null,
  content: "你好",
  type: 1 | 0,
  qrCodeBase64: string | null
}

export function getQrcodeImage(params: QrcodeParams): AxiosPromise<
  BaseResponseData & {
    data: QrcodeResult
  }
>
