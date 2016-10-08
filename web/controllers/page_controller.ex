defmodule GetLuckyWt.PageController do
  use GetLuckyWt.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
