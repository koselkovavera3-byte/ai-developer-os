import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const apps = [
  {
    id: "vk",
    name: "ВКонтакте",
    developer: "VK",
    category: "Социальные",
    version: "1.0.0",
    minimumIOS: "17.0",
    status: "available"
  },
  {
    id: "gosuslugi",
    name: "Госуслуги",
    developer: "Минцифры России",
    category: "Государство",
    version: "1.0.0",
    minimumIOS: "17.0",
    status: "available"
  }
];

app.get("/", (req, res) => {
  res.json({
    service: "RuStore API",
    version: "1.0.0",
    status: "online"
  });
});

app.get("/api/apps", (req, res) => {
  res.json({
    success: true,
    count: apps.length,
    apps
  });
});

app.get("/api/apps/:id", (req, res) => {

  const item =
    apps.find(
      app => app.id === req.params.id
    );

  if (!item) {
    return res.status(404).json({
      success: false,
      error: "APP_NOT_FOUND"
    });
  }

  res.json({
    success: true,
    app: item
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "rustore-backend"
  });
});

app.listen(PORT, () => {

  console.log(
    `RuStore API running on port ${PORT}`
  );

});