import {StarOutlined} from "@ant-design/icons";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export default function PokemonCard({pokemon}) {
  return (
    <Card
      title={pokemon.name}
      cover={
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description='' />
    </Card>
  );
}
