class SeasonsController < ApplicationController
  #layout false

  def show
    season_id = params[:id]
    championship_id = params[:championship_id]

    @season_summary = ChampzService.new.get_season_summary(season_id)
    @season = @season_summary.season
    @championship = @season.championship

    @phase = @season.phases[0]

  end
end
