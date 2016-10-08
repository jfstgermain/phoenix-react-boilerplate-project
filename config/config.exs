# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :get_lucky_wt,
  ecto_repos: [GetLuckyWt.Repo]

# Configures the endpoint
config :get_lucky_wt, GetLuckyWt.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "iSUEk3zsykVXd3jFE074A53I6rMgTpEr9/jvhVh61BkYYG8QW9Cbt9/ZAqusKbq0",
  render_errors: [view: GetLuckyWt.ErrorView, accepts: ~w(html json)],
  pubsub: [name: GetLuckyWt.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
