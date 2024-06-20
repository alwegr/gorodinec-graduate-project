import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Contract } from "../DocumentInterface";

const URL = process.env.REACT_APP_URL;

function PDFContract({ contractId }: any) {
  const { id } = useParams<{ id: string }>();
  const [dataConctarct, setDataContarct] = useState<Contract | null>(null);

  useEffect(() => {
    axios
      .get(`${URL}/get/contract/${id}`)
      .then((res) => {
        setDataContarct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const component = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: "Договор",
  });
  console.log("ffff");
  if (!dataConctarct) {
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
          <h2 style={{ textAlign: "center" }}>
            {dataConctarct.nameContract} возмездного оказания услуг{" "}
          </h2>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            {dataConctarct.counterparties.nameCounterparties} именуемое в
            дальнейшем «Заказчик» с одной стороны, и ИП «Ромашов Софт»,
            именуемый в дальнейшем «Исполнитель», с другой стороны, именуемые в
            дальнейшем «Стороны», заключили настоящий Договор о нижеследующем:
          </div>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>1. Предмет договора</h3>
            <p>
              1.1. {dataConctarct.subjectAgreement} по договору возмездного
              оказания услуг Исполнитель обязуется по заданию Заказчика оказать
              услуги, а Заказчик обязуется принять и оплатить эти услуги.
            </p>
          </div>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              2. Сумма договора и порядок расчетов
            </h3>
            <p>
              2.1 Сумма настоящего Договора составляет {dataConctarct.price}{" "}
              {dataConctarct.currency.title}
            </p>
            <p>
              2.2 Оплата по настоящему Договору производится в течение 14 дней с
              момента подписания Договора.
            </p>
          </div>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              3. Права и обязанности сторон
            </h3>
            <p>
              Исполнитель обязан:
              <ul>
                <li> – оказать услуги надлежащего качества;</li>
                <li>
                  – оказать услуги в полном объеме в срок, указанный в п. 8.1
                  настоящего Договора;
                </li>
                <li>
                  – безвозмездно исправить по требованию Заказчика все
                  выявленные недостатки, если в процессе оказания услуг
                  Исполнитель допустил отступление от условий Договора,
                  ухудшившее качество работы;
                </li>
                <li>
                  – выполнить работу лично или с привлечением третьих лиц.
                </li>
              </ul>
            </p>
            <p>
              Заказчик обязан:
              <ul>
                <li>
                  – оплатить услуги по цене, указанной в п. 2.1. настоящего
                  Договора;
                </li>
                <li>
                  – оказать услуги в полном объеме в срок, указанный в п. 8.1
                  настоящего Договора.
                </li>
              </ul>
            </p>
            <p>
              Заказчик имеет право:
              <ul>
                <li>
                  – во всякое время проверять ход и качество работы, выполняемой
                  Исполнителем, не вмешиваясь в его деятельность;
                </li>
                <li>
                  – отказаться от исполнения Договора в любое время до
                  подписания акта оказанных услуг, уплатив Исполнителю часть
                  установленной цены пропорционально части оказанных услуг,
                  выполненной до получения извещения об отказе Заказчика от
                  исполнения договора.
                </li>
              </ul>
            </p>
          </div>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              4. Порядок разрешения споров
            </h3>
            <p>
              4.1 Споры и разногласия, которые могут возникнуть при исполнении
              настоящего Договора, будут по возможности разрешаться путем
              переговоров между Сторонами
            </p>
            <p>
              4.2 В случае невозможности разрешения разногласий путем
              переговоров они подлежат рассмотрению в арбитражном суде согласно
              порядку, установленному законодательством Российской Федерации.
            </p>
          </div>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              5. Порядок изменения и расторжения договора
            </h3>
            <p>
              5.1 Любые изменения и дополнения к настоящему Договору имеют силу
              только в том случае, если они оформлены в письменном виде и
              подписаны обеими Сторонами.
            </p>
            <p>
              5.2 Досрочное расторжение Договора может иметь место настоящего
              Договора либо по соглашению Сторон, либо на основаниях,
              предусмотренных законодательством Российской Федерации.
            </p>
            <p>
              5.3 Заказчик вправе в одностороннем порядке отказаться от
              исполнения настоящего Договора при условии оплаты Исполнителю
              фактически понесенных им расходов.
            </p>
            <p>
              5.4 Исполнитель вправе в одностороннем порядке отказаться от
              исполнения настоящего Договора лишь при условии полного возмещения
              Заказчику убытков
            </p>
            <p>
              5.5 Сторона, решившая расторгнуть настоящий Договор, должна
              направить письменное уведомление о намерении расторгнуть настоящий
              Договор другой Стороне не позднее чем за 10 дней до
              предполагаемого дня расторжения настоящего Договора.
            </p>
          </div>
          <div
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
              textIndent: "30px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>6. Прочие условия</h3>
            <p>
              6.1 Настоящий Договор вступает в действие с {""}
              {new Date(dataConctarct.dateStart).toLocaleDateString()} и
              действует до{" "}
              {new Date(dataConctarct.dateEnd).toLocaleDateString()}
            </p>
            <p>
              6.2 В случае изменения у какой-либо из Сторон местонахождения,
              названия, банковских реквизитов и прочего она обязана в течение 10
              (десяти) дней письменно известить об этом другую Сторону, причем в
              письме необходимо указать, что оно является неотъемлемой частью
              настоящего Договора.
            </p>
            <p>
              6.3 Настоящий Договор составлен в двух экземплярах, имеющих
              одинаковую юридическую силу, по одному экземпляру для каждой из
              Сторон.
            </p>
            <p>
              6.4 Вопросы, не урегулированные настоящим Договором, разрешаются в
              соответствии с действующим законодательством Российской Федерации.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop:"40px", lineHeight: "1.5"}}>
            <div>
              <p> Заказчик:</p>
              {dataConctarct.counterparties.nameCounterparties}
              <p>ИНН: {dataConctarct.counterparties.inn}</p>
              <p>БИК: {dataConctarct.counterparties.bic}</p>
              <p>Адрес: {dataConctarct.counterparties.legalAddress}</p>
            </div>
            <div>
              <p> Исполнитель:</p>
              <p>ИП «Ромашов Софт»</p>
              <p>ИНН: 123-231-231</p>
              <p>БИК: 125632532</p>
              <p>Адрес: Кубанский 16</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PDFContract;
