const apps = [
  {
    id: "vk",
    name: "ВКонтакте",
    developer: "VK",
    category: "Социальные",
    description: "Общение, музыка, видео и сообщества.",
    version: "1.0.0",
    minimumIOS: "17.0",
    status: "available"
  },
  {
    id: "gosuslugi",
    name: "Госуслуги",
    developer: "Минцифры России",
    category: "Государство",
    description: "Государственные услуги в одном приложении.",
    version: "1.0.0",
    minimumIOS: "17.0",
    status: "available"
  },
  {
    id: "sberbank",
    name: "СберБанк",
    developer: "Сбер",
    category: "Финансы",
    description: "Банковские сервисы и платежи.",
    version: "1.0.0",
    minimumIOS: "17.0",
    status: "available"
  },
  {
    id: "tbank",
    name: "Т-Банк",
    developer: "Т-Банк",
    category: "Финансы",
    description: "Банковские и финансовые сервисы.",
    version: "1.0.0",
    minimumIOS: "17.0",
    status: "available"
  }
];

function getApps() {
  return apps;
}

function getAppById(id) {
  return apps.find(app => app.id === id);
}

function addApp(app) {
  if (!app || !app.id) {
    throw new Error("APP_ID_REQUIRED");
  }

  if (getAppById(app.id)) {
    throw new Error("APP_ALREADY_EXISTS");
  }

  apps.push(app);

  return app;
}

function updateApp(id, changes) {
  const app = getAppById(id);

  if (!app) {
    return null;
  }

  Object.assign(app, changes);

  return app;
}

function removeApp(id) {
  const index = apps.findIndex(
    app => app.id === id
  );

  if (index === -1) {
    return false;
  }

  apps.splice(index, 1);

  return true;
}

export {
  getApps,
  getAppById,
  addApp,
  updateApp,
  removeApp
};