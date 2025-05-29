/*
 * @Author: dqr
 * @Date: 2025-05-27 16:49:07
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-28 10:40:54
 * @FilePath: /vue3-ts-admin/src/hooks/useRequest.ts
 * @Description: 
 * 
 */
import { ref } from 'vue'

export function useRequest<T>(
  requestFn: (data:any) => Promise<T>,
  options?: {
    manual?: boolean
  },
) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const run = async (data:any) => {
    loading.value = true
    error.value = null
    try {
      const result = await requestFn(data)
      data.value = result
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }
  if (!options?.manual) {
    run(undefined)
  }
  return {
    data,
    loading,
    error,
    run
  }
}