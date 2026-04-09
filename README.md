# 🔐 Adaptive Cybersecurity System using Machine Learning

## 📌 Project Overview

This project is a **Network Intrusion Detection System (NIDS)** that uses **Machine Learning** and **Online Learning** techniques to detect cyber attacks in real-time.

It supports:

* ✅ Offline prediction using trained ML model
* ✅ Online learning using streaming data
* ✅ Concept drift detection using DDM & EDDM
* ✅ CSV upload for bulk prediction
* ✅ User authentication system

---

## 🚀 Features

* 🔍 Detects multiple attack types:

  * BENIGN
  * Bot
  * BruteForce
  * DoS
  * Infiltration
  * PortScan
  * WebAttack

* 📊 Upload CSV for batch predictions

* 📈 Real-time drift detection (DDM, EDDM)

* 🔄 Online model updates continuously

* 🔐 Signup/Login system using SQLite

* 🌐 Web interface using Flask

---

## 🛠️ Tech Stack

**Frontend:**

* HTML
* CSS
* JavaScript

**Backend:**

* Python (Flask)

**Machine Learning:**

* Scikit-learn
* River (Online Learning)

**Database:**

* SQLite

---

## 📂 Project Structure

```
ADAPTI/
│── app.py
│── templates/
│── static/
│── Models/
│── Dataset/ (ignored in GitHub)
│── .gitignore
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/ADAPTI.git
cd ADAPTI
```

### 2️⃣ Install dependencies

```
pip install -r requirements.txt
```

### 3️⃣ Run the application

```
python app.py
```

### 4️⃣ Open in browser

```
http://127.0.0.1:5050/
```

---

## 📊 How It Works

1. User inputs network traffic features
2. Data is preprocessed using scaler
3. Offline ML model predicts attack type
4. Online model learns continuously from new data
5. Drift detection (DDM, EDDM) monitors performance changes

---

## 🧠 Concept Drift Detection

* **DDM (Drift Detection Method):** Detects sudden changes in data
* **EDDM (Early Drift Detection Method):** Detects gradual changes

---


## 📌 Future Enhancements

* Deploy on cloud (AWS / GCP)
* Add real-time packet capture
* Improve model accuracy
* Add dashboard analytics

---

## 📜 License

This project is for academic and educational purposes.
