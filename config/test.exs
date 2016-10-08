use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :get_lucky_wt, GetLuckyWt.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :get_lucky_wt, GetLuckyWt.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "get_lucky_wt_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
