import { AxiosError, AxiosResponse, isAxiosError } from "axios"

// prettier-ignore
export async function to<T>(promise: Promise<AxiosResponse<T>> ): Promise<[{ message: string } | null, null | T]> {
  try {
    const { data } = await promise
    return [null, data]
  } catch (error) {
    if (import.meta.env.MODE === "development") console.error(error)
    else if (process.env.NODE_ENV === "development") console.error(error)
    if (!isAxiosError(error) || typeof error !== "object" || !("message" in error)) {
      return [{ message: "알 수 없는 에러가 발생했습니다." }, null]
    }

    if (typeof error.response?.data.data === "string") {
      return [{ message: error.response.data.data }, null]
    }

    if (typeof error.response?.data.message === "string") {
      return [{ message: error.response.data.message }, null]
    }

    return [{ message: "알 수 없는 에러가 발생했습니다." }, null]
  }
}

export function ErrorHandler<TError extends Error | AxiosError>(error: TError) {
  // * 에러 핸들링
  if (isAxiosError(error)) {
    return error
  } else {
    return error
  }
}
