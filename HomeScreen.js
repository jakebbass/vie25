import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [results, setResults] = useState(null);

  const calculateProjections = () => {
    const income = parseFloat(monthlyIncome);
    if (isNaN(income) || income <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid monthly income.');
      return;
    }

    const yearlyIncome = income * 12;
    const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'];
    const growthRate = 0.15;
    const data = { policyValues: [], loanBalances: [], netWorths: [] };

    for (let year = 1; year <= 5; year++) {
      const policyValue = yearlyIncome * year * (1 + growthRate) ** year;
      const loanBalance = policyValue * 0.6;
      const netWorth = policyValue - loanBalance;

      data.policyValues.push(policyValue);
      data.loanBalances.push(loanBalance);
      data.netWorths.push(netWorth);
    }

    const totalNetWorth = data.netWorths.reduce((acc, val) => acc + val, 0);
    const totalDeposited = yearlyIncome * 5;

    setResults({ years, data, totalNetWorth, totalDeposited });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>See What Vie Can Do For You</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Monthly Income"
        keyboardType="numeric"
        onChangeText={setMonthlyIncome}
        value={monthlyIncome}
      />
      <Button
        title="Calculate"
        onPress={calculateProjections}
        color="#286048"
      />
      {results && (
        <>
          <Text style={styles.graphHeader}>Projections</Text>
          <LineChart
            data={{
              labels: results.years,
              datasets: [
                { data: results.data.policyValues, color: () => '#286048', strokeWidth: 2 },
                { data: results.data.loanBalances, color: () => '#14FF55', strokeWidth: 2 },
                { data: results.data.netWorths, color: () => '#BAEBCE', strokeWidth: 2 },
              ],
            }}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
          <BarChart
            data={{
              labels: ['Capital Account', 'Checking Account'],
              datasets: [
                {
                  data: [(monthlyIncome * 12 * 0.09), 0],
                },
              ],
            }}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
          <PieChart
            data={[
              { name: 'Net Worth', population: results.totalNetWorth, color: '#14FF55', legendFontColor: '#7F7F7F', legendFontSize: 15 },
              { name: 'Total Deposited', population: results.totalDeposited, color: '#BAEBCE', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            ]}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </>
      )}
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(40, 96, 72, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    color: '#286048',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  graphHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default HomeScreen;
