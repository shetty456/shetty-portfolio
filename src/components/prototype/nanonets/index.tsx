import Screen0Signup from './Screen0Signup'
import Screen1Role from './Screen1Role'
import Screen2DemoReady from './Screen2DemoReady'
import Screen3Extraction from './Screen3Extraction'
import Screen4Gallery from './Screen4Gallery'
import Screen5Detail from './Screen5Detail'
import Screen6AhaMoment from './Screen6AhaMoment'
import Screen7Insight from './Screen7Insight'
import Screen8Editor from './Screen8Editor'
import Screen9Complete from './Screen9Complete'

export const SCREEN_NAMES = [
  'Signup',
  'Role Selection',
  'Demo Ready',
  'Extraction Complete',
  'Template Gallery',
  'Template Detail',
  'Aha Moment',
  'Value Insight',
  'Field Editor',
  'Onboarding Complete',
]

// Maps each screen index (0–9) to its parent step pill (0–5)
export const SCREEN_TO_STEP = [0, 1, 2, 2, 3, 3, 3, 4, 5, 5] as const

// Maps each step pill (0–5) to the first screen in that step
export const STEP_TO_SCREEN = [0, 1, 2, 4, 7, 8] as const

export type ScreenProps = { onNext: () => void }

export const SCREENS: React.ComponentType<ScreenProps>[] = [
  Screen0Signup,
  Screen1Role,
  Screen2DemoReady,
  Screen3Extraction,
  Screen4Gallery,
  Screen5Detail,
  Screen6AhaMoment,
  Screen7Insight,
  Screen8Editor,
  Screen9Complete,
]
