import "../scss/MoveBtn.scss";
import _ from "lodash";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiRefresh } from "react-icons/hi";
import emojiMenus from "./data";

function MoveBtn({
  availableOptionsArr,
  selectedOptionsArr,
  setAvailableOptionsArr,
  setSelectedOptionsArr,
  clickedAvailableArr,
  clickedselectedArr,
  setClickedAvailableArr,
  setClickedselectedArr,
  availableSaveOptionsArr,
  setAvailableSaveOptionsArr,
  selectedSaveOptionsArr,
  setSelectedSaveOptionsArr,
}) {
  // 초기화
  const initialize = () => {
    setAvailableOptionsArr(emojiMenus.filter((val) => !val.visible));
    setSelectedOptionsArr(emojiMenus.filter((val) => val.visible));
    setAvailableSaveOptionsArr(emojiMenus.filter((val) => !val.visible));
    setSelectedSaveOptionsArr(emojiMenus.filter((val) => val.visible));
  };

  // selected options로 전체이동
  const allSelected = () => {
    // selected 로 전체 목록이 이동
    const res = availableOptionsArr.map((el) => {
      return { ...el, visible: true };
    });
    setAvailableOptionsArr([]); // 왼쪽
    setAvailableSaveOptionsArr([]);
    setSelectedOptionsArr([...selectedOptionsArr, ...res]); // 오른쪽
    setSelectedSaveOptionsArr([...selectedOptionsArr, ...res]);
  };

  // available options로 전체이동
  const allAvailable = () => {
    const res = selectedOptionsArr.map((el) => {
      return { ...el, visible: false };
    });
    setSelectedOptionsArr([]);
    setSelectedSaveOptionsArr([]);
    setAvailableSaveOptionsArr([...availableOptionsArr, ...res]);
    setAvailableOptionsArr([...availableOptionsArr, ...res]);
  };

  // selected options로 지정이동

  const Selected = () => {
    const arr = [];

    for (let index of clickedAvailableArr) {
      arr.push(availableOptionsArr[index]);
    }

    const res = arr.map((el) => {
      return { ...el, visible: true };
    });
    let arr2 = availableOptionsArr.filter(
      (el, index) => !clickedAvailableArr.includes(index)
    );
    setAvailableOptionsArr([...arr2]); // 왼쪽
    setAvailableSaveOptionsArr([...arr2]);
    setSelectedOptionsArr([...selectedOptionsArr, ...res]); // 오른쪽 부분
    setSelectedSaveOptionsArr([...selectedOptionsArr, ...res]); // 오른쪽 부분

    // 선택해제 => 빈배열
    setClickedAvailableArr([]);
  };

  // available options로 지정이동
  const Available = () => {
    const arr = [];
  
    for (let index of clickedselectedArr) {
      arr.push(selectedOptionsArr[index]);
    }
    let arr2 = selectedOptionsArr.filter(
      (el, index) => !clickedselectedArr.includes(index)
    );
    const res = arr.map((el) => {
      return { ...el, visible: false };
    });
    setAvailableSaveOptionsArr([...availableOptionsArr, ...res]);
    setAvailableOptionsArr([...availableOptionsArr, ...res]);
    setSelectedSaveOptionsArr([...arr2]);
    setSelectedOptionsArr([...arr2]);
    // 선택해제 => 빈배열
    setClickedselectedArr([]);
  };
  return (
    <div className="MoveBtn-flex">
      <button className="MoveBtn-Button" onClick={initialize}><HiRefresh color="#333" size="18" /></button>
      <button className="MoveBtn-Button" onClick={allAvailable}>
        <HiChevronDoubleLeft color="#333" size="18" />
      </button>
      <button className="MoveBtn-Button" onClick={allSelected}>
        <HiChevronDoubleRight color="#333" size="18" />
      </button>

      {/* 환경설정에서 사용하는 input 태그 이벤트 예시 */}
      {/* <input onChange={onChangeAvailable} value={availableName} />
          <input onChange={onChangeSelected} value={selectedName} /> */}
      <button className="MoveBtn-Button" onClick={Available}><HiChevronLeft color="#333" size="18"/></button>
      <button className="MoveBtn-Button" onClick={Selected}><HiChevronRight color="#333" size="18"/></button>
    </div>
  );
}

export default MoveBtn;
