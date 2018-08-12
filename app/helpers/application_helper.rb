module ApplicationHelper
  def abbreviate_team_name(name)
    name.first(3).upcase
  end
end
