import React from "react";
import { Link } from "react-router-dom";

function CreatecCounterparties({ isOpen, onClose }: any) {
  return (
    <>
      {isOpen && (
        <div className={"page_popup"}>
          <div className={"wrapper"}>
            <form>
              <div>
                <label>Наименование</label>
                <div>
                    <input 
                        type="text"
                        id=""
                        placeholder="Наименование"
                        required/>
                </div>
              </div>
              <div className={"form_buttons"}>
                <Link to={"/counterparties"}>
                  <button className={"form_btn cancel"} onClick={onClose}>
                    Отменить
                  </button>
                </Link>
                <button className={"form_btn add"}>Добавить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default CreatecCounterparties;
