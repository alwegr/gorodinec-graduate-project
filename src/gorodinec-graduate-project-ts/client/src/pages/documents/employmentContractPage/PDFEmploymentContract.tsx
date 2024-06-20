import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { EmploymentContract } from "../DocumentInterface";

const URL = process.env.REACT_APP_URL;

// fonts={[
//   {
//     family: "Gilroy Black",
//     source:
//       "url(https://s166.convertio.me/p/ZnLj6w7hk5UMWX-0FIuwBg/9d87d9f4c362f9626dd4e1ce212104a7/Gilroy-Black-_1_.ttf)"
//   }

function PDFEmploymentContract({ employmentContractId }: any) {
  const { id } = useParams<{ id: string }>();
  const [dataEmploymentContract, setDataEmploymentContract] =
    useState<EmploymentContract | null>(null);

  useEffect(() => {
    axios
      .get(`${URL}/get/employmentContract/${id}`)
      .then((res) => {
        setDataEmploymentContract(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const component = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: "Трудовой договор",
  });
  if (!dataEmploymentContract) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div className={"container_btn_print"}>
        <button onClick={handlePrint} className={"print"}>
          Печатать
        </button>
      </div>
      <div
        style={{
          page: "A4",
          marginBottom: "20px",
          position: "relative",
          top: "0",
          left: "18%",
          width: "1240px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div ref={component} style={{ position: "relative", margin: "35px" }}>
          <div>
            <h2 style={{ textAlign: "center" }}>
              {dataEmploymentContract.nameEmploymentContract}
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <p style={{ textAlign: "end" }}>
                {new Date(
                  dataEmploymentContract.dateEmploymentContract
                ).toLocaleDateString()}{" "}
              </p>
              <p style={{ lineHeight: "1.5" }}>г. Волгодонск</p>
            </div>
            <p
              style={{
                lineHeight: "1.5",
                textAlign: "justify",
                textIndent: "30px",
              }}
            >
              ИП «Ромашов Софт» в лице идивидуального предпринимателя Ромашов
              Роман Владимрович действующего на основании устава, именуемый в
              дальнейшем <strong>«Работодатель»</strong>, с одной стороны, и гр.{" "}
              {`${dataEmploymentContract.lastName} ${dataEmploymentContract.firstName} ${dataEmploymentContract.middleName}`}
              , паспорт: {dataEmploymentContract.seriesPassport}, №{" "}
              {dataEmploymentContract.numberPassport}, проживающий по адресу:{" "}
              {dataEmploymentContract.address}, именуемый в дальнейшем{" "}
              <strong>«Работник»</strong>, с другой стороны, именуемый в
              дальнейшем «Стороны», заключили настоящий договор, в дальнейщем{" "}
              <strong>«Договор»</strong>, о нижеследующим:
            </p>
            <div
              style={{
                marginTop: "20px",
                lineHeight: "1.5",
                textIndent: "30px",
              }}
            >
              <h3 style={{ textAlign: "center" }}> 1. Предмет договора</h3>
              <p>
                1.1 Работник нанимается на работу в должности{" "}
                <strong>«{dataEmploymentContract.position.title}»</strong>.
              </p>
              <p>
                1.2 Настоящим договор является договором по основному месту
                работы.
              </p>
            </div>
            <div
              style={{
                lineHeight: "1.5",
                textIndent: "30px",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}> 2. Срок договора</h3>
              <p>
                2.1 Работник заключающий договор заключен на неопределнный срок.
              </p>
              <p>
                2.2 Работник обязуется приступить к исполнению обязанностей,
                предусмотренных в п.1.1., параграфе 3 настоящего договора с{" "}
                {new Date(
                  dataEmploymentContract.dateEmploymentContract
                ).toLocaleDateString()}{" "}
                года.
              </p>
              <p>
                2.3 Настоящим договором устанавливается испытательнй срок 1-3
                месяца.
              </p>
            </div>
            <div
              style={{
                marginTop: "20px",
                lineHeight: "1.5",
                textIndent: "30px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>
                {" "}
                3. Права и обязанности работника
              </h3>
              <p>
                3.1 Работник имеет право на:
                <ul>
                  <li>
                    – обязательное социальное страхование в случаях,
                    предусмотренных федеральными законами;
                  </li>
                  <li>
                    – полную достоверную информацию об условиях труда и
                    требованиях охраны труда на рабочем месте, включая
                    реализацию прав, предоставленных законодательством о
                    специальной оценке условий труда;
                  </li>
                  <li>
                    – подготовку и дополнительное профессиональное образование в
                    порядке, установленном настоящим Кодексом, иными
                    федеральными законами;
                  </li>
                  <li>
                    – отдых, обеспечиваемый установлением нормальной
                    продолжительности рабочего времени, сокращенного рабочего
                    времени для отдельных профессий и категорий работников,
                    предоставлением еженедельных выходных дней, нерабочих
                    праздничных дней, оплачиваемых ежегодных отпусков;
                  </li>
                </ul>
              </p>
              <p>
                3.1 Работник обязан:
                <ul>
                  <li>– соблюдать правила внутреннего трудового распорядка;</li>
                  <li>
                    – бережно относиться к имуществу работодателя (в том числе к
                    имуществу третьих лиц, находящемуся у работодателя, если
                    работодатель несет ответственность за сохранность этого
                    имущества) и других работников;
                  </li>
                  <li>
                    – добросовестно исполнять свои трудовые обязанности,
                    возложенные на него трудовым договором;
                  </li>
                  <li>– соблюдать трудовую дисциплину;</li>
                  <li>– выполнять установленные нормы труда;</li>
                </ul>
              </p>
            </div>
            <div style={{ lineHeight: "1.5", textAlign: "justify" }}>
              <h3 style={{ textAlign: "center" }}>
                {" "}
                4. Права и обязанности работодателя
              </h3>
              <p style={{ textIndent: "30px" }}>
                4.1 Работодатель имеет право:
                <ul>
                  <li>
                    – поощрять Работника за добросовестный и эффективный труд;
                  </li>
                  <li>
                    – требовать от Работника исполнения им своих трудовых
                    обязанностей и бережного отношения к имуществу Работодателя,
                    соблюдения правил внутреннего трудового распорядка
                    организации;
                  </li>
                  <li>
                    – привлекать Работника к дисциплинарной и материальной
                    ответственности в порядке, установленном Трудовым кодексом
                    Российской Федерации, иными федеральными законами; принимать
                    локальные нормативные акты.
                  </li>
                </ul>
              </p>
              <p style={{ textIndent: "30px", textAlign: "justify" }}>
                4.2 Работодатель обязан:
                <ul>
                  <li>
                    – соблюдать законы и нормативно-правовые акты, условия
                    коллективного договора, соглашений и трудового договора;
                  </li>
                  <li>
                    – соблюдать законы и нормативно-правовые акты, условия
                    коллективного договора, соглашений и трудового договора;
                    обеспечивать безопасность труда и условия, отвечающие
                    требованиям охраны и гигиены труда;
                  </li>
                  <li>
                    – обеспечивать Работника оборудованием, необходимыми
                    техническими средствами и иными средствами, необходимыми для
                    исполнения Работником своих трудовых обязанностей;
                  </li>
                  <li>
                    – выплачивать в полном размере причитающуюся Работнику
                    заработную плату в сроки, установленные ТК РФ, коллективным
                    договором, настоящим договором;
                  </li>
                  <li>
                    – осуществлять обязательное социальное страхование Работника
                    в порядке, установленном федеральными законами;
                  </li>
                  <li>
                    – возмещать вред, причиненный Работнику в связи с
                    исполнением им трудовых обязанностей, а таюке компенсировать
                    моральный вред в порядке и на условиях, которые установлены
                    ТК РФ, федеральными законами и иными нормативными правовыми
                    актами.
                  </li>
                </ul>
              </p>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>5. Гарантии и компенсации</h3>
              <p>
                5.1 На Работника полностью распространяются льготы и гарантии,
                установленные законодательством РФ, локальными нормативными
                актами.{" "}
              </p>
              <p>
                5.2 Ущерб, причиненный Работнику увечьем либо иным повреждением
                здоровья, связанным с исполнением им своих трудовых
                обязанностей, подлежит возмещению в соответствии с трудовым
                законодательством РФ.
              </p>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>6. Режим труда и отдыха</h3>
              <p>
                6.1 Работник обязан исполнять трудовые обязанности,
                предусмотренные в п.1.1., параграфе 3 настоящего договора в
                течение времени, установленного в соответствии с законами и
                иными ноомативными правовыми актами.
              </p>
              <p>6.2 Работнику устанавливается 40-часовая рабочая неделя;</p>{" "}
              <p>
                6.3 Работолатель обязан предоставлять Раоотнику время для отдыха
                в соответствии с действующим трудовым законодательством.
              </p>
              <p>
                6.4 Работодатель обязан предоставлять Работнику ежегодные
                оплачиваемые отпуска продолжительностью:
              </p>
              <ul>
                <li>– основной отпуск 28 календарных дней;</li>
                <li>– дополнительный отпуск – дней;</li>
              </ul>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>7. Условия оплаты труда</h3>
              <p>
                7.1 Работодатель обязан производить оплату труда Работника в
                соответствии с законами РФ, иными ноомативными правовыми актами,
                коллективными договорами, соглашениями, локальными нормативными
                актами и трудовым договором.
              </p>
              <p>
                7.2 Настоящим договором устанавливается следующий размер
                заработной плать {dataEmploymentContract.salary} рублей в месяц.
              </p>
              <p>
                7.3 Выплата заработной платы производится в валюте Российской
                Федерации.
              </p>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>
                8. Виды и условия социального страхования
              </h3>
              <p>
                8.1 Работодатель обязан осуществлять социальное страхование
                Работника, предусмотренное действующим законодательством.
              </p>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>9. Ответственность сторон</h3>
              <p>
                9.1 При причинении материального ущерба Работодателю, вызваного
                противоправными действиями или бездействием Работника при
                исполнении им своих должностных обязанностей, последний
                возмещает этот ущерб в соответствии с действующим Трудовым
                кодексом и иными законами Российской Федерации.
              </p>
              <p>
                9.2 Работодатель, причинивший ущерб Работнику, возмещает этот
                ущерб в соответствии с действующими законами Российской
                Федерации.
              </p>
              <p>
                9.3 Расторжение настоящего договора после причинения ущерба не
                освобождает стороны от материальной ответственности,
                предусмотреннои рудовым кодексом и иными законами Российской
                Федерации.
              </p>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>
                10. Порядок разрещения споров
              </h3>
              <p>
                10.1 Споры, возникающие между сторонами в связи с исполнением
                настоящего договора, разрешаются в порядке, установленном
                трудовым законолатепьством РФ.
              </p>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>
                11. Заключительные положения
              </h3>
              <p>
                11.1 Настоящий договор составлен в 2-х экземплярах и включает в
                себя 3 листа.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "40px",
                lineHeight: "1.5",
              }}
            >
              <div>
                <p> Работник:</p>
                <p>Адрес: {dataEmploymentContract.address}</p>
                <p>Паспорт серия: {dataEmploymentContract.seriesPassport}</p>
                <p>Паспорт номер: {dataEmploymentContract.numberPassport} </p>
                <p>Кем выдан: {dataEmploymentContract.issued} </p>
                <p>
                  Дата выдачи:{" "}
                  {new Date(
                    dataEmploymentContract.dateOfIssue
                  ).toLocaleDateString()}{" "}
                </p>
              </div>
              <div>
                <p> Работодатель:</p>
                <p>ИНН: 123-231-231</p>
                <p>БИК: 125632532</p>
                <p>Адрес: Кубанский 16</p>
                <p>Юр. адрес: Королева 10</p>
                <p>Почтовый адрес: 13414</p>
              </div>
            </div>
            <div
              style={{
                textIndent: "30px",
                lineHeight: "1.5",
                textAlign: "justify",
              }}
            >
              <h3 style={{ textAlign: "center" }}>13. Подписи сторон</h3>
              <div  style={{ display: "flex", justifyContent: "space-around", marginTop:"40px", lineHeight: "1.5"}}>
                <div>
                  <p>Работник: __________</p>
                </div>
                <div>
                  <p>Работодатель: __________</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PDFEmploymentContract;
