import '../styles/Footer.css'
import alexPhoto from '../assets/images/me.jpg?url'

export function Footer() {
  return (
    <footer className="" data-test="Footer">
      <div className="credit">
        <a href="https://thegouge.github.io" className="alex-link">
          <img
            src={alexPhoto}
            alt="Alex Logo"
            title="That's me!"
            className="alex"
          />{' '}
          &copy; Goose-Shaver Websites
        </a>
      </div>
      <div className="credit">
        I do not own the rights to this game or it's characters, all of that is
        property of{' '}
        <a className="credit-link" href="https://playoverwatch.com/en-us/">
          Blizzard
        </a>{' '}
        (please don't sue me)
      </div>
      <div className="credit">
        This app uses
        <a
          className="credit-link"
          href="https://github.com/alfg/overwatch-api#overwatch-api"
        >
          Overwatch API
        </a>{' '}
        for fetching Overwatch stats
      </div>
      <div className="credit">
        toggle switch designed by{' '}
        <a
          className="credit-link"
          href="https://codepen.io/mallendeo/pen/eLIiG?editors=1100"
        >
          mallendeo
        </a>
      </div>
      <div className="credit">
        Loading Spinner and Button Styles designed by{' '}
        <a
          className="credit-link"
          href="https://codepen.io/brundolf/pen/kXwdBb?editors=0100"
        >
          brundolf
        </a>
      </div>
    </footer>
  )
}
