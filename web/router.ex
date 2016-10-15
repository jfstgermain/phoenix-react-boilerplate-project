defmodule GetLuckyWt.Router do
  use GetLuckyWt.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", GetLuckyWt do
    pipe_through :browser # Use the default browser stack

    get "/", PostController, :index
    resources "/posts", PostController

    resources "/users", UserController do
      resources "/posts", PostController
    end
  end

  # Other scopes may use custom stacks.
  # scope "/api", GetLuckyWt do
  #   pipe_through :api
  # end
end
