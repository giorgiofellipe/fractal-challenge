import React, { useEffect, useMemo, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { format } from 'date-fns';

import api from '../../services/api';

import { Container, ChartsContainer } from './styles';

const Graphs = () => {
  const [series, setSeries] = useState<Array<GraphSerie>>([]);

  const rainGraphOptions = useMemo(() => {
    // vamos pegar todos os itens da serie e transformar a data em uma data legível 
    // (dia e mês), em seguida vamos eliminar os duplicados, já que a intenção é
    // agrupar por dia
    const categories = series
      .map(item => format(new Date(item.data_hora), 'dd/MM'))
      .filter((item, index, arr) => index === arr.indexOf(item));

    const data = categories.map(date =>
      // aqui iremos primeiramente separar todos os resultados do dia desejado
      series.filter(item => format(new Date(item.data_hora), 'dd/MM') === date)
        // em seguida somaremos todo o indice do dia
        .reduce((acc, item) => acc + item.chuva, 0)
    );

    return {
      title: {
        text: 'Indicadores de Chuva'
      },
      chart: {
        type: 'column',
      },
      xAxis: {
        categories,
        crosshair: true,
        opposite: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Chuva (mm)'
        },
        reversed: true,
      },
      series: [
        {
          data
        },
      ],
    }
  }, [series]);

  const levelGraphOptions = useMemo(() => {
    // vamos pegar todos os itens da serie e transformar a data em uma data legível 
    // (dia e mês), em seguida vamos eliminar os duplicados, já que a intenção é
    // agrupar por dia
    const categories = series
      .map(item => format(new Date(item.data_hora), 'dd/MM'))
      .filter((item, index, arr) => index === arr.indexOf(item));

    const data = categories.map(date => {
      // aqui iremos primeiramente separar todos os resultados do dia desejado
      const items = series.filter(item => format(new Date(item.data_hora), 'dd/MM') === date);

      // em seguida somaremos todo o indice do dia
      const sum = items.reduce((acc, item) => acc + parseFloat(item.nivel), 0);

      // devolveremos a média
      return Math.round((sum / items.length) * 100) / 100;
    });

    return {
      title: {
        text: 'Nível do Rio'
      },
      chart: {
        type: 'line',
      },
      xAxis: {
        categories,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Nível (m)'
        },
      },
      series: [
        {
          data
        },
      ],
    }
  }, [series]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get('series.json');
      setSeries(data);
    }
    load();
  }, [])

  return <Container>
    <ChartsContainer>
      <HighchartsReact
        highcharts={Highcharts}
        options={rainGraphOptions}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={levelGraphOptions}
      />
    </ChartsContainer>
  </Container>
}

export default Graphs;
