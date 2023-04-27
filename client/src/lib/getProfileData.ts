export default async function getProfileData(
  platform: string,
  region: string,
  gamertag: string
): Promise<PlayerData> {
  const url = `${
    import.meta.env.VITE_SERVER_API
  }/api/v1/profile/${platform}/${region}/${gamertag}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    if (json.error) {
      throw json.error
    } else {
      return json
    }
  } catch (error: any) {
    console.log('error!')
    console.error(error)
    return { error, name: gamertag }
  }
}
