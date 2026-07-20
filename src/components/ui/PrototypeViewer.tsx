'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, RotateCcw, Maximize2, X } from 'lucide-react'

export type ScreenProps = { onNext: () => void }

interface PrototypeViewerProps {
  screens: React.ComponentType<ScreenProps>[]
  screenNames: string[]
  onScreenChange?: (i: number) => void
  command?: { screen: number; seq: number } | null
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -28 : 28 }),
}

const transition = { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const }

function ViewerChrome({
  screenNames,
  current,
  total,
  fullscreen,
  onExpand,
  onClose,
}: {
  screenNames: string[]
  current: number
  total: number
  fullscreen?: boolean
  onExpand?: () => void
  onClose?: () => void
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-[#f5f5f4] border-b border-slate-200 flex-shrink-0">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[11px] font-semibold text-slate-700 truncate">
          {screenNames[current]}
        </span>
        <span className="text-[10px] text-slate-400 flex-shrink-0">{current + 1} / {total}</span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <span className="text-[10px] text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full hidden sm:inline-flex items-center gap-1">
          ← → to navigate
        </span>
        {fullscreen ? (
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors p-0.5">
            <X className="w-4 h-4" />
          </button>
        ) : (
          <button onClick={onExpand} className="text-slate-400 hover:text-slate-700 transition-colors p-0.5" title="Expand">
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}

function ViewerNav({
  current,
  total,
  screenNames,
  onGoTo,
}: {
  current: number
  total: number
  screenNames: string[]
  onGoTo: (i: number) => void
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-[#f5f5f4] border-t border-slate-200 flex-shrink-0">
      <button
        onClick={() => onGoTo(current - 1)}
        disabled={current === 0}
        className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        Back
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`rounded-full transition-all duration-150 ${
              i === current
                ? 'bg-[#3b63f0] w-4 h-[5px]'
                : 'bg-slate-300 hover:bg-slate-400 w-[5px] h-[5px]'
            }`}
            aria-label={`${screenNames[i]}`}
          />
        ))}
      </div>

      {current < total - 1 ? (
        <button
          onClick={() => onGoTo(current + 1)}
          className="flex items-center gap-1 text-[11px] font-semibold text-[#3b63f0] hover:text-blue-700 transition-colors"
        >
          Next
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      ) : (
        <button
          onClick={() => onGoTo(0)}
          className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Restart
        </button>
      )}
    </div>
  )
}

export default function PrototypeViewer({
  screens,
  screenNames,
  onScreenChange,
  command,
}: PrototypeViewerProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)
  const total = screens.length
  const prevCurrent = useRef(0)

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(total - 1, i))
      setDirection(clamped >= prevCurrent.current ? 1 : -1)
      prevCurrent.current = clamped
      setCurrent(clamped)
      onScreenChange?.(clamped)
    },
    [total, onScreenChange]
  )

  // External jump from step pills
  useEffect(() => {
    if (command != null) goTo(command.screen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command])

  // Keyboard navigation — ← → arrows
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft') goTo(current - 1)
      if (e.key === 'Escape' && fullscreen) setFullscreen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, fullscreen, goTo])

  const CurrentScreen = screens[current]

  const screenContent = (
    <div className="overflow-x-auto overflow-y-auto bg-white">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          <div className="min-w-[560px] p-3">
            <CurrentScreen onNext={() => goTo(current + 1 < total ? current + 1 : 0)} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )

  return (
    <>
      {/* Inline viewer */}
      <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm flex flex-col">
        <ViewerChrome
          screenNames={screenNames}
          current={current}
          total={total}
          onExpand={() => setFullscreen(true)}
        />
        {screenContent}
        <ViewerNav current={current} total={total} screenNames={screenNames} onGoTo={goTo} />
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => { if (e.target === e.currentTarget) setFullscreen(false) }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-xl overflow-hidden w-full max-w-4xl flex flex-col shadow-2xl"
            >
              <ViewerChrome
                screenNames={screenNames}
                current={current}
                total={total}
                fullscreen
                onClose={() => setFullscreen(false)}
              />
              {screenContent}
              <ViewerNav current={current} total={total} screenNames={screenNames} onGoTo={goTo} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
