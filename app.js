// 主应用逻辑
class MovieHubApp {
  constructor() {
    this.currentGenre = 'all';
    this.currentType = 'all';
    this.searchQuery = '';
    this.init();
  }

  init() {
    this.setupSearch();
    this.setupScrollEffect();
    this.renderMovieGrid('trending');
  }

  // 搜索功能
  setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.searchQuery = e.target.value.trim();
          if (this.searchQuery.length > 0) {
            this.performSearch(this.searchQuery);
          } else {
            this.renderMovieGrid('trending');
          }
        }, 300);
      });
    }
  }

  // 滚动效果
  setupScrollEffect() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }

  // 执行搜索
  performSearch(query) {
    const results = searchMovies(query);
    this.renderCards(results, 'searchResults');
  }

  // 渲染影视卡片
  renderCards(items, containerId = 'movieGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <div class="icon">🔍</div>
          <p>没有找到相关内容，换个关键词试试吧</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => this.createMovieCard(item)).join('');

    // 添加点击事件
    container.querySelectorAll('.movie-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = `detail.html?id=${card.dataset.id}`;
      });
    });
  }

  // 创建影视卡片HTML
  createMovieCard(item) {
    const typeLabel = item.type === 'movie' ? '电影' : '剧集';
    const episodeInfo = item.type === 'tv' ? `${item.episodes}集` : item.duration;

    return `
      <div class="movie-card" data-id="${item.id}">
        <div class="card-poster" style="background: ${item.posterBg};">
          <span style="font-size: 80px;">${item.poster}</span>
          <div class="card-type-badge">${typeLabel}</div>
          <div class="card-rating">⭐ ${item.rating}</div>
        </div>
        <div class="card-info">
          <div class="card-title">${item.title}</div>
          <div class="card-meta">
            <span>${item.year}</span>
            <span>•</span>
            <span>${episodeInfo}</span>
          </div>
          <div class="card-genres">
            ${item.genres.slice(0, 3).map(g => `<span class="genre-tag">${g}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // 渲染影视网格
  renderMovieGrid(sortBy = 'trending') {
    let items;
    if (this.searchQuery) {
      items = searchMovies(this.searchQuery);
    } else if (this.currentGenre === 'all' && this.currentType === 'all') {
      items = sortBy === 'trending' ? getTrending() :
              sortBy === 'latest' ? getLatest() : getAllMovies();
    } else {
      let filtered = getAllMovies();
      if (this.currentType !== 'all') {
        filtered = filtered.filter(item => item.type === this.currentType);
      }
      if (this.currentGenre !== 'all' && this.currentGenre !== 'movie' && this.currentGenre !== 'tv') {
        filtered = filtered.filter(item => item.genres.includes(this.currentGenre));
      } else if (this.currentGenre === 'movie' || this.currentGenre === 'tv') {
        filtered = filtered.filter(item => item.type === this.currentGenre);
      }
      items = filtered;
    }

    this.renderCards(items);
    this.updateResultsInfo(items.length);
  }

  // 更新结果信息
  updateResultsInfo(count) {
    const infoEl = document.getElementById('resultsInfo');
    if (infoEl) {
      infoEl.textContent = `共找到 ${count} 部作品`;
    }
  }

  // 切换分类
  switchGenre(genre) {
    this.currentGenre = genre;
    this.renderMovieGrid();
    // 更新活跃标签
    document.querySelectorAll('.genre-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.genre === genre);
    });
  }

  // 切换类型
  switchType(type) {
    this.currentType = type;
    this.renderMovieGrid();
  }
}

// 全局函数
function switchGenre(genre) {
  if (window.app) {
    window.app.switchGenre(genre);
  }
}

function switchView(view) {
  if (window.app) {
    window.app.renderMovieGrid(view);
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MovieHubApp();
});
