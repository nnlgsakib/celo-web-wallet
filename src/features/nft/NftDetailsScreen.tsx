import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { Font } from 'src/styles/fonts'
import { Stylesheet } from 'src/styles/types'
import { useLocationState } from 'src/utils/useLocationState'

interface LocationState {
  address: Address
  id: string
}

export function NftDetailsScreen() {
  const navigate = useNavigate()
  const locationState = useLocationState<LocationState>()

  useEffect(() => {
    // Make sure we belong on this screen
    if (!locationState?.address || !locationState?.id) {
      navigate('/nft')
      return
    }
  }, [locationState])

  if (!locationState?.address || !locationState?.id) return null
  const { address, id } = locationState

  const onClickSend = () => {
    navigate('/nft/send', { state: { address, id } })
  }

  return (
    <ScreenContentFrame>
      <h1 css={style.h1}>Your Non-Fungible Tokens (NFTs)</h1>
    </ScreenContentFrame>
  )
}

const style: Stylesheet = {
  h1: {
    ...Font.h2Green,
    marginBottom: '1.5em',
  },
}
