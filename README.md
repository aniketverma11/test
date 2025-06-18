# AI Calculator

This repository is an example project built using GitHub Copilot Agent. It demonstrates how to create a modern, web-based AI-powered calculator application, with a FastAPI backend and a React (Vite) frontend.

## Features

- Perform basic and advanced calculations using an AI model
- Modern frontend built with React and Vite for a fast, responsive UI
- FastAPI backend for processing calculations and serving API endpoints
- Example of integrating frontend and backend with AI logic

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** FastAPI (Python)
- **AI/ML:** (Specify the AI model or library if any, e.g., OpenAI, scikit-learn, etc.)
- **Development powered by:** GitHub Copilot Agent

## Getting Started

### Prerequisites

- Node.js (for frontend)
- Python 3.11+ (for backend)
- pip (Python package installer)
- (Optional) Virtual environment tool (venv, virtualenv, or conda)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/aniketverma11/testrepo.git
cd testrepo
```

#### 2. Setting up the Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
uvicorn main:app --reload
```

By default, the FastAPI server will run at [http://localhost:8000](http://localhost:8000).

#### 3. Setting up the Frontend (React Vite)

```bash
cd frontend
npm install
npm run dev
```

By default, the frontend will run at [http://localhost:5173](http://localhost:5173).

## Usage

1. Start the FastAPI backend server.
2. Start the React frontend dev server.
3. Open your browser and navigate to the frontend URL.
4. Use the calculator interface to perform AI-powered calculations.

## Project Structure

```
testrepo/
│
├── backend/         # FastAPI app (Python)
│   ├── main.py
│   └── requirements.txt
│
├── frontend/        # React Vite app (JavaScript/TypeScript)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## API Endpoints

- `POST /calculate`: Accepts calculation requests and returns results (specify details if needed).

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

For questions or feedback, contact [aniketverma11](https://github.com/aniketverma11).
