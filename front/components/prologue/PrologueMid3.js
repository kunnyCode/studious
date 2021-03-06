import { useSetRecoilState } from 'recoil';
import { registerModalState } from '../../core/atoms/modalState';
const PrologueMid3 = () => {
  const setShow = useSetRecoilState(registerModalState);
  function clickHandler() {
    setShow(true);
  }
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase  lg:text-3xl">
              스터디를 개설하고 스터디원들을 모집해보세요!
            </h1>
            <p className="mt-2 text-gray-600 ">
              STUDIOUS는 원하는 주제의 스터디를 개설하고 스터디원들을 모집할 수
              있습니다. 언제든 원하는 유저들이라면 모두 입장할 수 있는 Public
              Study, 방장이 스터디원을 모집하고 모집한 스터디원들만 참여할 수
              있는 Private Study의 두 종류의 스터디를 지원하고 있습니다. 원하는
              스터디를 자유롭게 개설하고 참여해보세요!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-2xl"
            src="/board.png"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PrologueMid3;
