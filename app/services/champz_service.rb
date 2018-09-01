class ChampzService

  require 'rest-client'
  require 'ostruct'
  def get_season_summary(season_id)
    service_host = ENV['CHAMPZ_RESTSERVICE_SERVICE_SERVICE_HOST'] || "localhost"
    service_port = ENV['CHAMPZ_RESTSERVICE_SERVICE_SERVICE_PORT'] || "8080"
    user = ENV['CHAMPZ_RESTSERVICE_SERVICE_SERVICE_USER'] || "user"
    password = ENV['CHAMPZ_RESTSERVICE_SERVICE_SERVICE_PWD'] || "password"
    response = RestClient.get "http://#{user}:#{password}@#{service_host}:#{service_port}/api/seasonsSummary/" + season_id
    JSON.parse(response.body, object_class: OpenStruct)
  end
end
