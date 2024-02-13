package com.antonybresolin.backend.repositories;

import com.antonybresolin.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
