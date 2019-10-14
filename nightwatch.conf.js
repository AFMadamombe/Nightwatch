module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports/',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',
  webdriver: {
  start_process: true,
  start_session: true,
  log_path: '',
  },
  test_settings: {
  default: {
  silent: true,
  end_session_on_fail: true,
  screenshots: {
  enabled: true,
  path: 'screenshots',
  on_failure: true,
  on_error: true,
  },
  persist_globals: true,
  disable_colors: false,
  // test_workers: {
  // enabled: true,
  // workers: 'auto',
  // },
  },
  chrome: {
  desiredCapabilities: {
  browserName: 'chrome',
  chromeOptions: {
  args: [
  '--ignore-certificate-errors',
  '--test-type',
  '--no-sandbox',
  ],
  w3c: false,
  },
  },
  webdriver: {
  port: 9515,
  server_path: './libs/drivers/chromedriver.exe',
  },
  },
  firefox: {
  desiredCapabilities: {
  browserName: 'firefox',
  alwaysMatch: {
  'moz:firefoxOptions': {
  args: ['--headless'],
  },
  },
  },
  webdriver: {
  server_path: './libs/drivers/geckodriver.exe',
  },
  },
  edge: {
  desiredCapabilities: {
  browserName: 'MicrosoftEdge',
  },
  },
  },
 };