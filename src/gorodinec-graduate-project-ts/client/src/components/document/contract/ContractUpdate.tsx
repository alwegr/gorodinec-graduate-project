import { stat } from "fs/promises";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Contract } from "../../../pages/documents/DocumentInterface";
import Select from "react-select";
import { style } from "../../ui/select"

const URL = process.env.REACT_APP_URL;

function ContractUpdate({ isOpen, onClose, contractId }: any) {
  const id = contractId;
  const [statusContract, setStatusContract] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [statusList, setStatusList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Contract>(`${URL}/get/contract/${id}`);
        const { statusContract } = response.data;
        setStatusContract({
          value: statusContract._id,
          label: statusContract.title,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    axios
      .get(`${URL}/get/statusContract`)
      .then((res) => {
        setStatusList(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .put(`${URL}/update/contract/${id}`, {
        statusContract: statusContract?.value,
      })
      .then((res) => {
        window.location.reload();
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isOpen && (
        <div className={"page_popup"}>
          <div className={"wrapper"}>
            <form onSubmit={handleUpdate}>
              <h2>Изменить статус</h2>
              <div className={"input_div"}>
                <label htmlFor="position">Статус</label>
                <div className="select_position">
                  <Select
                    options={statusList.map((statusContractItem) => ({
                      value: statusContractItem._id,
                      label: statusContractItem.title,
                    }))}
                    onChange={(selectedOption: any) =>
                        setStatusContract(selectedOption)
                    }
                    styles={style}
                    value={statusContract}
                  />
                </div>
              </div>
              <div className={"form_buttons"}>
                  <button className={"form_btn cancel"} onClick={onClose}>
                    Отменить
                  </button>
                <button className={"form_btn add"}>Изменить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default ContractUpdate;
