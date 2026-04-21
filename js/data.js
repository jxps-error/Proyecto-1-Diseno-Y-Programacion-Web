const mockUsers = [
  { id: '1', email: 'user@cookplanner.com', password: 'user123', name: 'Usuario Demo', role: 'user' },
  { id: '2', email: 'chef@cookplanner.com', password: 'chef123', name: 'Chef Demo', role: 'chef' },
  { id: '3', email: 'admin@cookplanner.com', password: 'admin123', name: 'Admin Demo', role: 'admin' },
];


const mockRecipes = [
  {
    id: '1',
    title: 'Pasta Carbonara',
    description: 'Clásica pasta italiana con salsa cremosa de huevo y panceta',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    chefId: '2',
    chefName: 'Chef Demo',
    ingredients: [
      { name: 'Spaguetti', quantity: '400g', price: 2.5 },
      { name: 'Panceta', quantity: '200g', price: 4.0 },
      { name: 'Huevos', quantity: '4 unidades', price: 1.5 },
      { name: 'Queso parmesano', quantity: '100g', price: 3.5 },
      { name: 'Pimienta negra', quantity: 'Al gusto', price: 0.5 },
    ],
    instructions: [
      'Cocinar los spaguetti en agua con sal según las instrucciones del paquete',
      'Mientras, cortar la panceta en cubos pequeños y dorar en una sartén',
      'Batir los huevos con el queso parmesano rallado',
      'Escurrir la pasta y mezclar rápidamente con la panceta y los huevos',
      'Servir inmediatamente con pimienta negra molida',
    ],
    difficulty: 'medium',
    prepTime: 30,
    servings: 4,
    category: 'Pasta',
    tags: ['italiana', 'cremosa', 'rápida'],
    rating: 4.8,
    totalCost: 12.0,
    reviews: [
      {
        userId: '1',
        userName: 'Usuario Demo',
        rating: 5,
        comment: '¡Deliciosa! La mejor carbonara que he hecho',
        date: '2026-02-28',
      },
    ],
    createdAt: '2026-02-15',
  },
  {
    id: '2',
    title: 'Ensalada César',
    description: 'Ensalada fresca con pollo, crutones y aderezo césar',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
    chefId: '2',
    chefName: 'Chef Demo',
    ingredients: [
      { name: 'Lechuga romana', quantity: '1 unidad', price: 2.0 },
      { name: 'Pechuga de pollo', quantity: '300g', price: 5.0 },
      { name: 'Pan para crutones', quantity: '100g', price: 1.0 },
      { name: 'Queso parmesano', quantity: '50g', price: 1.8 },
      { name: 'Aderezo césar', quantity: '100ml', price: 2.2 },
    ],
    instructions: [
      'Lavar y cortar la lechuga romana',
      'Cocinar y cortar la pechuga de pollo en tiras',
      'Preparar crutones con pan tostado en cubos',
      'Mezclar todos los ingredientes',
      'Agregar el aderezo césar y el queso parmesano rallado',
    ],
    difficulty: 'easy',
    prepTime: 20,
    servings: 2,
    category: 'Ensaladas',
    tags: ['saludable', 'fresca', 'ligera'],
    rating: 4.5,
    totalCost: 12.0,
    reviews: [],
    createdAt: '2026-02-20',
  },
  {
    id: '3',
    title: 'Tacos al Pastor',
    description: 'Auténticos tacos mexicanos con carne marinada y piña',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    chefId: '2',
    chefName: 'Chef Demo',
    ingredients: [
      { name: 'Carne de cerdo', quantity: '500g', price: 6.0 },
      { name: 'Tortillas', quantity: '12 unidades', price: 2.5 },
      { name: 'Piña', quantity: '200g', price: 1.5 },
      { name: 'Cilantro', quantity: '1 manojo', price: 0.8 },
      { name: 'Cebolla', quantity: '1 unidad', price: 0.7 },
      { name: 'Adobo', quantity: '100g', price: 2.0 },
    ],
    instructions: [
      'Marinar la carne con el adobo durante al menos 2 horas',
      'Cocinar la carne en una sartén o plancha hasta que esté dorada',
      'Calentar las tortillas',
      'Cortar la carne, piña, cilantro y cebolla en trozos pequeños',
      'Servir en las tortillas con todos los ingredientes',
    ],
    difficulty: 'medium',
    prepTime: 45,
    servings: 4,
    category: 'Mexicana',
    tags: ['mexicana', 'picante', 'tradicional'],
    rating: 4.9,
    totalCost: 13.5,
    reviews: [
      {
        userId: '1',
        userName: 'Usuario Demo',
        rating: 5,
        comment: 'Sabor auténtico, me encantó!',
        date: '2026-03-01',
      },
    ],
    createdAt: '2026-02-25',
  },
  {
    id: '4',
    title: 'Sushi Rolls',
    description: 'Rolls de sushi caseros con salmón y aguacate',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    chefId: '2',
    chefName: 'Chef Demo',
    ingredients: [
      { name: 'Arroz para sushi', quantity: '300g', price: 3.5 },
      { name: 'Salmón fresco', quantity: '200g', price: 8.0 },
      { name: 'Aguacate', quantity: '2 unidades', price: 3.0 },
      { name: 'Alga nori', quantity: '10 hojas', price: 4.0 },
      { name: 'Vinagre de arroz', quantity: '50ml', price: 2.0 },
      { name: 'Salsa de soja', quantity: '100ml', price: 1.5 },
    ],
    instructions: [
      'Cocinar el arroz y mezclarlo con vinagre de arroz',
      'Extender el alga nori sobre una esterilla de bambú',
      'Colocar una capa fina de arroz sobre el alga',
      'Agregar salmón y aguacate en el centro',
      'Enrollar con la esterilla y cortar en porciones',
    ],
    difficulty: 'hard',
    prepTime: 60,
    servings: 3,
    category: 'Japonesa',
    tags: ['japonesa', 'fresco', 'elegante'],
    rating: 4.7,
    totalCost: 22.0,
    reviews: [],
    createdAt: '2026-02-18',
  },
];


const mockCategories = [
  { id: '1', name: 'Pasta', icon: '🍝', count: 15 },
  { id: '2', name: 'Ensaladas', icon: '🥗', count: 12 },
  { id: '3', name: 'Mexicana', icon: '🌮', count: 20 },
  { id: '4', name: 'Japonesa', icon: '🍱', count: 8 },
  { id: '5', name: 'Postres', icon: '🍰', count: 25 },
  { id: '6', name: 'Carnes', icon: '🥩', count: 18 },
];


function getCurrentUser() {
  const userJson = localStorage.getItem('cookplanner_user');
  return userJson ? JSON.parse(userJson) : null;
}

function login(email, password) {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem('cookplanner_user', JSON.stringify(userWithoutPassword));
    return true;
  }
  return false;
}

function register(email, password, name) {
  if (mockUsers.some(u => u.email === email)) {
    return false;
  }
  const newUser = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    role: 'user',
  };
  localStorage.setItem('cookplanner_user', JSON.stringify(newUser));
  mockUsers.push({ ...newUser, password });
  return true;
}

function logout() {
  localStorage.removeItem('cookplanner_user');
  window.location.href = 'index.html';
}

function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  return user;
}


function getRecipes() {
  const savedRecipes = localStorage.getItem('cookplanner_recipes');
  return savedRecipes ? JSON.parse(savedRecipes) : mockRecipes;
}

function saveRecipes(recipes) {
  localStorage.setItem('cookplanner_recipes', JSON.stringify(recipes));
}

function getCategories() {
  const savedCategories = localStorage.getItem('cookplanner_categories');
  return savedCategories ? JSON.parse(savedCategories) : mockCategories;
}

function saveCategories(categories) {
  localStorage.setItem('cookplanner_categories', JSON.stringify(categories));
}

function getFavorites() {
  const savedFavorites = localStorage.getItem('cookplanner_favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('cookplanner_favorites', JSON.stringify(favorites));
}

function getPlanner() {
  const savedPlanner = localStorage.getItem('cookplanner_planner');
  return savedPlanner ? JSON.parse(savedPlanner) : [];
}

function savePlanner(planner) {
  localStorage.setItem('cookplanner_planner', JSON.stringify(planner));
}

function toggleFavorite(recipeId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(recipeId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(recipeId);
  }
  saveFavorites(favorites);
}

function addRecipe(recipeData) {
  const recipes = getRecipes();
  const newRecipe = {
    ...recipeData,
    id: Math.random().toString(36).substr(2, 9),
    rating: 0,
    reviews: [],
    createdAt: new Date().toISOString().split('T')[0],
  };
  recipes.unshift(newRecipe);
  saveRecipes(recipes);
  return newRecipe;
}

function updateRecipe(recipeId, updates) {
  const recipes = getRecipes();
  const index = recipes.findIndex(r => r.id === recipeId);
  if (index > -1) {
    recipes[index] = { ...recipes[index], ...updates };
    saveRecipes(recipes);
    return true;
  }
  return false;
}

function deleteRecipe(recipeId) {
  const recipes = getRecipes();
  const filtered = recipes.filter(r => r.id !== recipeId);
  saveRecipes(filtered);
}

function addReview(recipeId, review) {
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id === recipeId);
  if (recipe) {
    const newReview = {
      ...review,
      date: new Date().toISOString().split('T')[0],
    };
    recipe.reviews.push(newReview);
    recipe.rating = recipe.reviews.reduce((sum, r) => sum + r.rating, 0) / recipe.reviews.length;
    saveRecipes(recipes);
    return true;
  }
  return false;
}

function addToPlanner(date, recipeId) {
  const planner = getPlanner();
  const dayIndex = planner.findIndex(d => d.date === date);
  if (dayIndex >= 0) {
    planner[dayIndex].recipes.push(recipeId);
  } else {
    planner.push({ date, recipes: [recipeId] });
  }
  savePlanner(planner);
}

function removeFromPlanner(date, recipeId) {
  const planner = getPlanner();
  const dayIndex = planner.findIndex(d => d.date === date);
  if (dayIndex >= 0) {
    planner[dayIndex].recipes = planner[dayIndex].recipes.filter(id => id !== recipeId);
    if (planner[dayIndex].recipes.length === 0) {
      planner.splice(dayIndex, 1);
    }
  }
  savePlanner(planner);
}

function addCategory(name, icon) {
  const categories = getCategories();
  const newCategory = {
    id: Math.random().toString(36).substr(2, 9),
    name,
    icon,
    count: 0,
  };
  categories.push(newCategory);
  saveCategories(categories);
}

function updateCategory(categoryId, name, icon) {
  const categories = getCategories();
  const category = categories.find(c => c.id === categoryId);
  if (category) {
    category.name = name;
    category.icon = icon;
    saveCategories(categories);
    return true;
  }
  return false;
}

function deleteCategory(categoryId) {
  const categories = getCategories();
  const filtered = categories.filter(c => c.id !== categoryId);
  saveCategories(filtered);
}
