import { instanceApi } from '@/api/instance'

export const sendForm = (payload: Record<string, unknown>) => {
  return instanceApi.post('clients/campaign/test', {
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
  })
}
