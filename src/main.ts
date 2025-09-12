import './style.css'

interface PixelData {
  x: number;
  y: number;
  color: string;
}

async function loadPixelData(): Promise<PixelData[]> {
  const response = await fetch('./output.json');
  return await response.json();
}

function createPixelGrid(pixelData: PixelData[]): void {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  const container = document.createElement('div');
  container.className = 'pixel-grid';
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(59, 12px);
    grid-template-rows: repeat(59, 12px);
    gap: 0;
  `;

  pixelData.forEach(pixel => {
    const div = document.createElement('div');
    div.style.cssText = `
      width: 12px;
      height: 12px;
      background-color: ${pixel.color === 'transparent' ? 'lightgray' : 
                           pixel.color === 'black' ? 'black' : 'white'};
      grid-column: ${pixel.x + 1};
      grid-row: ${pixel.y + 1};
    `;
    container.appendChild(div);
  });

  app.appendChild(container);
}

async function init() {
  try {
    const pixelData = await loadPixelData();
    createPixelGrid(pixelData);
  } catch (error) {
    console.error('Error loading pixel data:', error);
  }
}

init();
