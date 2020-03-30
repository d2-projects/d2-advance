import start from '@/utils/start-loading'
import view from '@/views/StartLoading'

start(() => import('./main'), view)
