import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { progressPercentage } from './utils';

export default (
  formData: FormData,
  onProgress: (p: number) => void
): AxiosPromise<any> => {
  return request({
    url: process.env.VUE_APP_HUSKY_URL + '/avatar',
    method: 'post',
    // headers: {},
    data: formData,
    onUploadProgress(progressEvent) {
      onProgress(progressPercentage(progressEvent));
    }
  });
};
