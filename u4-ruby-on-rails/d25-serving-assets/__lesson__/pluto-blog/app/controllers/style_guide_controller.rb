class StyleGuideController < ApplicationController
  def index
    redirect_to style_guide_category_path('typography')
  end

  def show
    @views = Pathname.glob(Pathname.new(view_paths.first).join("style_guide").join(params[:category]).join('_*.html*'))
  end
end
