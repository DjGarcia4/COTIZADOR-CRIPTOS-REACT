/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
const Cotizacion = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: grid;
  place-items: center;
  margin-top: 30px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 150px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Cotizacion>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Cotizacion>
  );
};

export default Resultado;
