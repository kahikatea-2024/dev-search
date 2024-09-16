import { TypeAnimation } from 'react-type-animation'
import { TextAnim } from 'text-animations-react'

export function Footer() {
  return (
    <>
      <footer className="bg-bg py-4">
        <div className="container mx-auto text-center">
          <div className="via-pink-500 flex bg-gradient-to-r from-purple-500 to-lightOrg2 bg-clip-text">
            <TextAnim
              name="Made with"
              size={1}
              type="popoutin"
              count="1"
              duration={2}
            />{' '}
            &nbsp;
            <TextAnim
              name="Passion"
              size={1}
              type="lightspeed"
              color=""
              count="1"
              duration={2}
            />{' '}
            ,&nbsp;
            <TextAnim
              name=" Team Work"
              size={1}
              type="fromtop"
              color=""
              count="1"
              duration={2}
            />
            &nbsp; &&nbsp;
            <TextAnim
              name=" Creativity"
              size={1}
              type="rollin"
              color=""
              count="1"
              duration={2}
            />
            &nbsp;
            {/* Adding GitHub links */}
            <TextAnim
              name={
                <span>
                  {' '}
                  By{' '}
                  <a
                    href="https://github.com/aimee-mcneil-melville"
                    className="hover:underline "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Aimee </strong>
                  </a>
                  ,{' '}
                  <a
                    href="https://github.com/bradacraig"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Brad</strong>
                  </a>
                  ,{' '}
                  <a
                    href="https://github.com/fatima-yar"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Fatima</strong>
                  </a>{' '}
                  &{' '}
                  <a
                    href="https://github.com/robert-hall-24"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Rob</strong>
                  </a>
                  .
                </span>
              }
              size={1}
              type="popoutin"
              color=""
              count="1"
              duration={3}
            />
          </div>

          <p className="text-sm text-gray-400">
            © 2024 Dev Search. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
