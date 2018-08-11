class ChampzService

  require 'rest-client'
  require 'ostruct'
  def get_season_summary(season_id)
    response = RestClient.get 'http://user:password@localhost:8080/api/seasonsSummary/' + season_id
    JSON.parse(response.body, object_class: OpenStruct)
  end
end
