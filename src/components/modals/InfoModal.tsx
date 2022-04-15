import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the <b>transportation/bussing</b> related word in 6 tries. After each guess, the
        color of the tiles will change to show how close your guess was to the
        word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="V" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="K" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="U" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Zfauser/roxle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        <br></br>
        <br></br>
        Made By: <b><a href="https://zachfauser.com/">Zach Fauser</a></b>
      </p>
    </BaseModal>
  )
}
