<?php

namespace Database\Factories;

use App\Models\article;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'context' => $this->faker->realText(rand(10, 15)),
            // 'article_image' => 'https://source.unsplash.com/random',
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
