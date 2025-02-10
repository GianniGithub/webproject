import React from 'react'

export const App = () => {
  return (
<div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg
        class="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
      </svg>
    </span>
  </div>
  <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any oravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
    </p>

          {/* Einfache Verwendung */}
      <BrandedButton 
        buttonColor="#FF5733" 
        textColor="#FFFFFF"
      >
        Klick mich!
      </BrandedButton>
      <div class="grid grid-cols-4 gap-4">
        {/* Verwendung in einer Schleife (wie zuvor gezeigt) */}
        {[...Array(10)].map((_, index) => (
          <BrandedButton
            key={index}
            buttonColor={`hsl(${index * 36}, 70%, 50%)`}
            textColor="#FFF"
          >
            Button {index + 1}
          </BrandedButton>
        ))}
      </div>
</div>

  )
}
function ButtonLoop() {
  const buttons = [];
  for (let i = 0; i < 10; i++) {
    buttons.push(
      <BrandedButton
        key={i}
        buttonColor="blue"
        textColor="white"
      >
        Button {i + 1}
      </BrandedButton>
    );
  }

  return <div>{buttons}</div>;
}

export function BrandedButton({ buttonColor, textColor, children }) {
  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: textColor,
      }}
      className="rounded-md px-3 py-1.5 font-medium"
    >
      {children}
    </button>
  );
}

export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url }) {
  return (
    <div>
      <img className="rounded-lg" src={img} alt={imgAlt} />
      <div className="mt-4">
        <div className="text-xs font-bold text-sky-500">{eyebrow}</div>
        <div className="mt-1 font-bold text-gray-700">
          <a href={url} className="hover:underline">
            {title}
          </a>
        </div>
        <div className="mt-2 text-sm text-gray-600">{pricing}</div>
      </div>
    </div>
  );
}

export default App