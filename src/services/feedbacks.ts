import { AxiosInstance } from 'axios'
import { Feedback } from '@/types/feedback'
import { RequestError } from '@/types/error'

type Create = {
  data: Feedback;
  errors: RequestError | null;
}

type CreatePayLoad = {
  type: string;
  text: string;
  fingerprint: string;
  device: string;
  page: string;
  apiKey: string;
}

export interface FeedbackServiceInterface {
  create(payload: CreatePayLoad): Promise<Create>;
}

function FeedbacksService (httpCliente: AxiosInstance): FeedbackServiceInterface {
  async function create (payload: CreatePayLoad): Promise<Create> {
    const response = await httpCliente.post<Feedback>('/feedbacks', payload)
    let errors: RequestError | null = null

    if (!response.data) {
      errors = {
        status: response.request,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }

  return {
    create
  }
}

export default FeedbacksService
