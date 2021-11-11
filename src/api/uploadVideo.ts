import request from '@/utils/request';

// tslint:disable-next-line
export function progressPercentage(progressEvent: any) {
  return Math.round((progressEvent.loaded * 100) / progressEvent.total);
}

export interface UploadVideoResult {
  region: string;
  bucketName: string;
  key: string;
}

export const uploadVideo = async (
  generatePresignUrl: any,
  file: any,
  onProgress: (p: number) => void
) => {
  await request({
    url: generatePresignUrl.url,
    method: 'put',
    data: file,
    onUploadProgress(progressEvent) {
      onProgress(progressPercentage(progressEvent));
    }
  });
  const payload: UploadVideoResult = {
    region: generatePresignUrl.region,
    bucketName: generatePresignUrl.bucketName,
    key: generatePresignUrl.key
  };
  return payload;
};
