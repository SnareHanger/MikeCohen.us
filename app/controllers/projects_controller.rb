class ProjectsController < ApplicationController
  # map.connect '/projects/:name', :controller => "projects", :action => "action"
  # match 'projects/:name' => "projects#index"

  def index
    if (params[:name])
      
      p = Project.find_by_title(params[:name].gsub("-", " "))
      if(p)
        @cssTitle = p.cssTitle
        @title = p.title
        @description = p.description
        @position = p.position
        @images = p.images
      end
    else
      render :status => 404
    end
  end



end
