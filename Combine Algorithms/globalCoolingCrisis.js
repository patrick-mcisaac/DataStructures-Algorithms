// TODO: Implement WeatherPatternAnalyzer using Map and Set
// A station experiences a "significant change" if |curr - prev| >= 5

class WeatherPatternAnalyzer {
  constructor() {
    // this.stations: Map<string, { latestTemp: number, count: number }>
    // this.significant: Set<string>
    this.stations = new Map();
    this.significant = new Set();
  }

  addTemperatureReading(stationId, temperature) {
    // TODO
    if(this.stations.has(stationId)){
      if(temperature - this.stations.get(stationId).latestTemp >= 5){
        this.significant.add(stationId)
        this.stations.set(stationId, {latestTemp: temperature, count: this.stations.get(stationId).count + 1})
        return
      }
    }
    this.stations.set(stationId, {latestTemp: temperature, count:  1})
  }

  getSignificantChangeStations() {
    // TODO

    return [...this.significant].sort((a,b) => a.localeCompare(b))
   
  }

  getStationData(stationId) {
    // TODO
    if(this.stations.has(stationId)){
      return this.stations.get(stationId)
    }
    return null;
  }

  getAllActiveStations() {
    // TODO
    const result = new Set()
    for(const [id, data] of this.stations){
      result.add(id)
    }
    return result
  }

  getSystemSummary() {
    // TODO
    return { stationCount: this.stations.size, significantCount: this.significant.size };
  }
}

const weather = new WeatherPatternAnalyzer()
weather.addTemperatureReading("station1", 20)
weather.addTemperatureReading("station1", 27)
weather.addTemperatureReading("station2", 27)
console.log(weather.getAllActiveStations())
console.log(weather.getStationData('station1'))
console.log(weather.getSystemSummary())
console.log(weather.getSignificantChangeStations())