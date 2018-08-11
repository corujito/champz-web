class SeasonsController < ApplicationController
  #layout false

  def show
    season_id = params[:id]
    championship_id = params[:championship_id]

    @season_summary = ChampzService.new.get_season_summary(season_id)
    @season = @season_summary.season
    @championship = @season.championship

    @phase = @season.phases[0]
    @group = @season.phases[0].groups[0]
    @classification = @season.phases[0].groups[0].classificationTable
    @matches = @season.phases[0].groups[0].matches

  end
end
