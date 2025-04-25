class TodosController < ApplicationController
  def index
    @text = "This message was passed from the Rails controller."
  end
end
